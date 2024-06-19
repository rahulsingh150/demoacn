import React from 'react';
import TabsWithDropdowns from './TabsWithDropdowns';
import Institute from './Institute'
import Contact from '../Pages/Contact'
import '../Styles/Tab.css';
import one from '../Assests/AnnualReport/Nanoscience-22-23-compressed.pdf'
import two from '../Assests/AnnualReport/Nanoscience-21-22-compressed.pdf'
import three from '../Assests/AnnualReport/AnnualReport-20-21.pdf'
import four from '../Assests/AnnualReport/AnnualReport-19-20.pdf'
import five from '../Assests/AnnualReport/AnnualReport-18-19.pdf'
import six from '../Assests/AnnualReport/Annual report- 17-18.pdf'
import seven from '../Assests/AnnualReport/Annual Report 2016-17 ACNN - 13-11-2017.pdf'

import ResearchActivities1 from '../Assests/ResearchActivities/ResearchActivities1.pdf'
import ResearchActivities2 from '../Assests/ResearchActivities/ResearchActivities2.pdf'
import ResearchActivities3 from '../Assests/ResearchActivities/ResearchActivities3.pdf'
import ResearchActivities4 from '../Assests/ResearchActivities/ResearchActivities4.pdf'
import ScientificInfrastructure from '../Assests/ResearchActivities/ScientificInfrastructure.pdf'


const TabNavBar = () => {
  const tabs = [
    {
      label: 'The Institute',
      content: <Institute/>,
      dropdownOptions: [
        { label: 'Mission and Vision', link: '/missionAndVision' },
        { label: 'Goals', link: '/goals' },
        { label: 'Objectives', link: '/Objectives' },
        { label: 'Current scenario', link: '/Currentscenario' },
      ]
    },
    {
      label: 'Academic Program',
      dropdownOptions: [
        { label: 'M.Sc. in Nano Science & Technology', link: '#' },
        { label: 'M.Tech. in Nano Science & Technology', link: '#' },
        { label: 'Ph.D. in Nano Science & Technology', link: '#' }
      ]
    },
    {
      label: 'People',
      dropdownOptions: [
        { label: 'Teaching & Research Staff', link: '/Faculty' },
        { label: 'Our Team', link: '/Team' },
        { label: 'Support Staff', link: '/Staff' },
        { label: 'Faculty In-Charge', link: '/HaedDepartment' },
      ]
    },
    {
      label: 'Annual Report',
      dropdownOptions: [
        { label: 'Annual Report- 2022-23', link: one },
        { label: 'Annual Report- 2021-22', link: two },
        { label: 'Annual Report- 2020-21', link: three },
        { label: 'Annual Report- 2019-20', link: four },
        { label: 'Annual Report- 2018-19', link: five },
        { label: 'Annual Report- 2017-18', link: six },
        { label: 'Annual Report- 2016-17', link: seven },
      ]
    },
    {
      label: 'Activities',
      dropdownOptions: [
        { label: 'Research Activities - 1', link: ResearchActivities1 },
        { label: 'Research Activities - 2', link: ResearchActivities2 },
        { label: 'Research Activities - 3', link: ResearchActivities3 },
        { label: 'Research Activities - 4', link: ResearchActivities4 },
        { label: 'Research & Devlopement Infrastructure', link: ScientificInfrastructure },
      ]
    },
    {
      label: 'eResources',
      dropdownOptions: [
        { label: 'UGC', link: 'https://www.ugc.gov.in/' },
        { label: 'NDA', link: 'https://www.nda.gov.in/' },
        { label: 'SWAYAM', link: 'https://www.swayam.gov.in/' },
        { label: 'SWAYAM PRABHA', link: 'https://www.swayamprabhay.gov.in/' },
        { label: 'EGYANKOSH', link: 'https://www.inflibnet.ac.in/' },
        { label: 'EPATHSHALA', link: 'https://epathshala.nic.in/' },
        { label: 'ISRO', link: 'https://www.isro.gov.in/' },
      ]
    },
    {
      label: 'Contact',
      content: <Contact/>,
      
    },
  ];

  return (
    <div className="TabNavBar">
      <TabsWithDropdowns tabs={tabs} />
    </div>
  );
};

export default TabNavBar;
