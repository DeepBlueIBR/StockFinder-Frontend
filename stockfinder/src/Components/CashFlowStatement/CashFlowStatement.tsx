import React, { useEffect, useState } from 'react'
import { CompanyCashFlow } from '../../company';
import { useOutletContext } from 'react-router';
import { getCashFlowStatement } from '../../api';
import Table from '../Table/Table';
import Spinner from '../Spinner/Spinner';

type Props = {};

const config = [
    {
      label: "Date",
      render: (company: CompanyCashFlow) => company.date,
    },
    {
      label: "Operating Cashflow",
      render: (company: CompanyCashFlow) => company.operatingCashFlow,
    },
    {
      label: "Property/Machinery Cashflow",
      render: (company: CompanyCashFlow) =>
        company.investmentsInPropertyPlantAndEquipment,
    },
    {
      label: "CapEX",
      render: (company: CompanyCashFlow) => company.capitalExpenditure,
    },
    {
      label: "Free Cash Flow",
      render: (company: CompanyCashFlow) => company.freeCashFlow,
    },
    {
        label: "Other Investing Cashflow",
        render: (company: CompanyCashFlow) => company.otherInvestingActivites,
      },
      {
        label: "Debt Cashflow",
        render: (company: CompanyCashFlow) =>
          company.netCashUsedProvidedByFinancingActivities,
      },
  ];

const CashFlowStatement = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [cashflowData, setCashflow] = useState<CompanyCashFlow[]>();
    useEffect(() => {
        const fetchCashflow = async () => {
            const result = await getCashFlowStatement(ticker!);
            setCashflow(result!.data);
        }
        fetchCashflow();
    },[]);
  return cashflowData ? (
            <Table config={config} data={cashflowData} />
        ) : 
        (
            <Spinner />
        );
    
  
};

export default CashFlowStatement
