import { MRT_ColumnDef } from 'material-react-table'
import { useMemo } from 'react'
import { nameComponents } from '../types/IColumns'

interface IColumns {
  name: nameComponents
}

const COLUMNS = {
  logbook: () => [
    {
      header: 'id',
      accessorKey: 'id',
      size: 100,
    },
    {
      header: 'currency',
      accessorKey: 'currency',
      size: 100,
    },
    {
      header: 'Link_tradingview',
      accessorKey: 'Link_tradingviews',
      size: 100,
    },
    {
      header: 'Date',
      accessorKey: 'Date',
      size: 100,
    },
    {
      header: 'Strategy',
      accessorKey: 'Strategy',
      size: 100,
    },
    {
      header: 'Order',
      accessorKey: 'Order',
      size: 100,
    },
    {
      header: 'Price',
      accessorKey: 'Price',
      size: 100,
    },
    {
      header: 'pips_SL',
      accessorKey: 'pips_SL',
      size: 100,
    },
    {
      header: 'SL',
      accessorKey: 'SL',
      size: 100,
    },
    {
      header: 'pips_TP',
      accessorKey: 'pips_TP',
      size: 100,
    },
    {
      header: 'TP',
      accessorKey: 'TP',
      size: 100,
    },
    {
      header: 'lotage',
      accessorKey: 'lotage',
      size: 100,
    },
    {
      header: 'Temporality',
      accessorKey: 'Temporality',
      size: 100,
    },
    {
      header: 'Desc_Results',
      accessorKey: 'Desc_Results',
      size: 100,
    },
    {
      header: 'Observationss',
      accessorKey: 'Observationss',
      size: 100,
    },
    {
      header: 'Performance',
      accessorKey: 'Performance',
      size: 100,
    },

  ],
}

const useColumns = ({ name }: IColumns) => {
  const columns = COLUMNS[name] || (() => [])
  return useMemo<MRT_ColumnDef<any>[]>(columns, [columns])
}

export default useColumns
