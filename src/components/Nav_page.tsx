import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Default_fetching } from './Default_fetching';
import { Home_page } from './Home_page';
import { Basic_req } from './Basic_req';
import { Data_fetch_error } from './Data_fetch_error';
import { Get_users_btn } from './Get_users_btn';
import { On_success } from './On_success';
import { Other } from './Other';
import { ParallelQueries } from './ParallelQueries';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      sx={{maxWidth: "1000px"}}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Nav_page() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
   <div className='home_page'>
        <Box sx={{ maxWidth: '1200px' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Home" {...a11yProps(0)} />
              <Tab label="Default Requesting" {...a11yProps(1)} />
              <Tab label="useQuery Basic Request" {...a11yProps(2)} />
              <Tab label="useQuery Error" {...a11yProps(3)} />
              <Tab label="Get user Button" {...a11yProps(4)} />
              <Tab label="On fetch success" {...a11yProps(5)} />
              <Tab label="Parallel Queries" {...a11yProps(6)} />
              <Tab label="Other" {...a11yProps(7)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Home_page />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Default_fetching />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Basic_req />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <Data_fetch_error />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <Get_users_btn />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={5}>
            <On_success />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={6}>
            <ParallelQueries />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={7}>
            <Other />
          </CustomTabPanel>
        </Box>
   </div>
  );
}
