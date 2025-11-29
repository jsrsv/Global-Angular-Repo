import { Routes } from '@angular/router';
import { Dashboard } from './Features/dashboard/dashboard';
import { Analysis } from './Features/analysis/analysis';
import { Business } from './Features/business/business';
import { Funds } from './Features/funds/funds';
import { SupplyChain } from './Features/supply-chain/supply-chain';
import { Project } from './Features/project/project';
import { Risk } from './Features/risk/risk';
import { HumanResources } from './Features/human-resources/human-resources';
import { HumanResourcesManagement } from './Features/human-resources-management/human-resources-management';
import { Logistics } from './Features/logistics/logistics';
import { Goods } from './Features/goods/goods';
import { Operations } from './Features/operations/operations';
import { Sales } from './Features/sales/sales';
import { Home } from './Features/home/home';
import { Login } from './Features/login/login';
import { Statistics } from './Features/statistics/statistics';
import { ParentDivisions } from './parent-divisions/parent-divisions';
import { FmcgDivision } from './fmcg-division/fmcg-division';
import { CostumesDivision } from './costumes-division/costumes-division';
import { ElectronicsDivision } from './electronics-division/electronics-division';
import { LogisticsDivision } from './logistics-division/logistics-division';


export const routes: Routes = 
[
{
    path: 'admin/dashboard',
    component:Dashboard
},
  { path: 'admin/Analysis', component: Analysis },
  { path: 'admin/Business', component: Business },
  { path: 'admin/Funds', component: Funds },
  { path: 'admin/SupplyChain', component: SupplyChain },
  { path: 'admin/Project', component: Project },
  { path: 'admin/Risk', component: Risk },
  { path: 'admin/HR', component: HumanResources },
  { path: 'admin/HRManagement', component: HumanResourcesManagement },
  { path: 'admin/Logistics', component: Logistics },
  { path: 'admin/goods', component: Goods },
  { path: 'admin/operations', component: Operations },
  { path: 'admin/sales', component: Sales },
  { path: 'admin/home', component: Home },
  { path: 'admin/login', component: Login }, 
  {
    path: 'admin/Statistics',
    component: Statistics,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'FMCG' },
      { path: 'FMCG', component: FmcgDivision },
      { path: 'CostumesApparel', component: CostumesDivision },
      { path: 'Electronics', component: ElectronicsDivision },
      { path: 'LogisticsServices', component: LogisticsDivision }
    ]
  },
 {
  path: 'admin/divisions',
  component: ParentDivisions,   // parent with tabs
  children: [
    { path: 'FMCG', component: FmcgDivision },
    { path: 'CostumesApparel', component: CostumesDivision },
    { path: 'Electronics', component: ElectronicsDivision },
    { path: 'LogisticsServices', component: LogisticsDivision }
  ]
}
];
