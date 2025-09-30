import { useTheme } from '@mui/material/styles';
import { Card, Stack, TextField, Button, Grid, Typography } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';
import { _posts, _tasks, _traffic, _timeline } from 'src/_mock';

import { AnalyticsNews } from '../analytics-news';
import { AnalyticsTasks } from '../analytics-tasks';
import { AnalyticsCurrentVisits } from '../analytics-current-visits';
import { AnalyticsOrderTimeline } from '../analytics-order-timeline';
import { AnalyticsWebsiteVisits } from '../analytics-website-visits';
import { AnalyticsWidgetSummary } from '../analytics-widget-summary';
import { AnalyticsTrafficBySite } from '../analytics-traffic-by-site';
import { AnalyticsCurrentSubject } from '../analytics-current-subject';
import { AnalyticsConversionRates } from '../analytics-conversion-rates';

// ----------------------------------------------------------------------

export function OverviewAnalyticsView() {
  const theme = useTheme();
  // TODO:
  // const [emailSteps, setEmailSteps] = useState<any>(null);

  function addStep() {
    // TODO
  }

  function handleStepChange() {
    // TODO
  }
  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Overjoy | Email Campaigns
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        <Card sx={{ width: '100%', m: 3, p: 2 }}>
          <Stack spacing={2}>
            <Typography variant="h5">Email Step 1</Typography>
            <TextField
              label="Subject"
              onChange={(e) => {
                const newValue = e.target.value;
                handleStepChange();
              }}
            />
            <TextField
              label="Body"
              onChange={(e) => {
                const newValue = e.target.value;
                handleStepChange();
              }}
            />
          </Stack>
        </Card>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            addStep();
          }}
        >
          + Add step
        </Button>
      </Grid>
    </DashboardContent>
  );
}
