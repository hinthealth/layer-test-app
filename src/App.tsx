import './App.css';
import "@layerfi/components/dist/index.css"

import { LayerProvider, BankTransactions, ProfitAndLoss } from "@layerfi/components";

export function App() {
  const businessId = "<businessId>";
  const environment = "sandbox";
  const businessAccessToken = "<businessAccessToken>";

  return (
    <>
      <h1>Parcel React App</h1>

      <LayerProvider
        businessId={businessId}
        environment={environment}
        businessAccessToken={businessAccessToken}
      >
      <BankTransactions />

      <ProfitAndLoss>
        <div className='profit-and-loss__chart-container'>
          <ProfitAndLoss.Chart />
        </div>
        <ProfitAndLoss.Summaries />
        <div className='profit-and-loss__date-picker-container'>
          <ProfitAndLoss.DatePicker />
        </div>
        <ProfitAndLoss.Table />
      </ProfitAndLoss>
    </LayerProvider>
    </>
  );
}
