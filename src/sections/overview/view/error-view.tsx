import { useState } from 'react';

import { useTheme } from '@mui/material/styles';
import {
  Card,
  Grid,
  Stack,
  TextField,
  Button,
  Typography,
  IconButton,
  Container,
} from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';
import { _posts, _tasks, _traffic, _timeline } from 'src/_mock';

import { Iconify } from 'src/components/iconify';
// import { loadInitialValues } from '../utils/campaigns';

// ----------------------------------------------------------------------

type EmailStep = {
  id: string;
  subject: string;
  body: string;
};

export default function ErrorDashboardApp() {
  const theme = useTheme();

  const [emailSteps, setEmailSteps] = useState<EmailStep[]>([
    { id: crypto.randomUUID(), subject: '', body: '' },
  ]);

  function addStep() {
    setEmailSteps((prev) => [...prev, { id: crypto.randomUUID(), subject: '', body: '' }]);
  }

  function removeStep(id: string) {
    setEmailSteps((prev) => prev.filter((s) => s.id !== id));
  }

  function handleStepChange(id: string, field: 'subject' | 'body', value: string) {
    setEmailSteps([
      ...emailSteps,
      {
        id,
        body: value,
      } as EmailStep,
    ]);
  }

  return (
    <Stack>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Overjoy | Email Campaigns
        </Typography>

        <Stack spacing={3} justifyContent="center">
          {emailSteps.map((step, idx) => (
            <Grid container key={step.id}>
              <Card sx={{ width: '100%', p: 2 }}>
                <Stack spacing={2}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h5">Email Step {idx + 1}</Typography>
                    {emailSteps.length > 1 && (
                      <Button variant="contained" color="error" onClick={() => removeStep(step.id)}>
                        Remove
                      </Button>
                    )}
                  </Stack>

                  <TextField
                    label="Subject"
                    value={step.subject}
                    onChange={(e) => handleStepChange(step.id, 'subject', e.target.value)}
                    fullWidth
                  />

                  <TextField
                    label="Body"
                    value={step.body}
                    onChange={(e) => handleStepChange(step.id, 'body', e.target.value)}
                    fullWidth
                    multiline
                    minRows={4}
                  />
                </Stack>
              </Card>
            </Grid>
          ))}

          <Stack alignItems="center" justifyContent="center" sx={{ mb: 4, width: '100%' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={addStep}
              sx={{
                width: 300,
              }}
            >
              + Add step
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
