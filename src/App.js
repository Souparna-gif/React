import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <One />
      <Two />
      <Three />
      <Four />
    </div>
  );
}

function One() {
  return (
    <div>
      <h1>Unemployment</h1>
    </div>
  )
}

function Two() {
  return (
    <div>
      <h2>What is unemployment?</h2>
      <p className="description"> Unemployment refers to the state of being without a job and actively seeking employment. It is a measure of the percentage of the workforce that is not currently employed but is willing and able to work.<br />
      Unemployment is a state where individuals who are willing and able to work are not able to find employment. It is typically measured as a percentage of the labor force that is actively seeking work but unable to find it.</p>
    </div>
  )
}

function Three() {
  return (
    <div>
      <h2>Reason</h2>
      <p className="description"><strong>1. Economic factors:</strong> Changes in the overall economy, such as a recession or economic downturn, can lead to a decline in demand for goods and services, which can result in job losses and unemployment.<br />
      <strong>2. Technological advances: </strong> Advances in technology can lead to automation, which can replace jobs previously performed by humans, leading to job losses and unemployment.<br />
      <strong>3. Demographic changes:</strong> Changes in the size or makeup of the population, such as an increase in the number of older workers, can impact employment opportunities for different age groups.<br />
      <strong>4. Skill mismatch:</strong> A mismatch between the skills and qualifications of job seekers and the requirements of available jobs can result in structural unemployment.<br />
      <strong>5. Government policies:</strong> Policies related to taxation, trade, or regulation can impact employment opportunities and contribute to unemployment.<br />
      <strong>6. Natural disasters:</strong> Natural disasters, such as hurricanes or floods, can damage infrastructure and disrupt economic activity, leading to job losses and unemployment.<br />
      Unemployment is often a complex issue that may have multiple causes, and different types of unemployment may have different underlying factors.<br /> Understanding the causes of unemployment can help policymakers develop effective strategies to address the issue and promote job growth.</p>
  
    </div>
  )
}
function Four() {
  return (
    <div>
      <h2>Solution</h2>
      <p className="solution"><b>Education and training programs:</b> Investing in education and training programs can help individuals develop new skills and qualifications that are in demand by employers.<br />
      <b>Stimulating economic growth:</b> Policies that promote economic growth, such as tax incentives for businesses, infrastructure investment, and deregulation, can help to create new job opportunities.<br />
      <b>Supporting small businesses:</b> Small businesses are often a significant source of job creation, and policies that support small businesses, such as access to capital and technical assistance, can help to stimulate job growth.<br />
      <b>Labor market flexibility:</b> Policies that promote flexibility in the labor market, such as reducing barriers to entry for new businesses or making it easier for workers to move between jobs, can help to promote job growth.<br />
      <b>Social safety net:</b> Providing a social safety net, such as unemployment insurance, can help to provide a cushion for individuals who have lost their jobs and promote economic stability during periods of unemployment.<br />
      <b>International cooperation:</b> Addressing global economic challenges such as trade imbalances or climate change, through international cooperation, can also help to create new job opportunities and reduce unemployment.<br />
      Effective solutions to unemployment require careful consideration of the unique economic, social, and political factors of each situation.</p>
    </div>
  )
}

export default App;

