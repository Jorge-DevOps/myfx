import { useEffect, useState, memo, useMemo } from 'react'
import type { PaginationState } from '@tanstack/react-table'
import MaterialReactTable from 'material-react-table'
import { Box, IconButton, Tooltip, createTheme, ThemeProvider, useTheme } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material'
import LockResetIcon from '@mui/icons-material/LockReset'
import { ITableParams } from './types/ITable'
import { nameComponents } from './types/IColumns'
import useColumns from './hooks/useColumns'

export type operaciones = 'create' | 'edit' | 'delete' | 'restorePassword'

interface Props {
  name: nameComponents
  fetchData(params: ITableParams): Promise<any>
  handle(row: any, op: operaciones): void
  TableHeader?: JSX.Element | string
  edit?: boolean
  delete?: boolean
  enableEditing?: boolean
  reload?: boolean
  restorePassword?: boolean
  hanleReloadCallback?: () => void
}

export const Table = ({ name, fetchData, handle, TableHeader, edit: optionEdit = false, delete: optionDelete = false, reload, enableEditing = false, restorePassword: optionRestorePasswd = false, hanleReloadCallback }: Props) => {
  const [data, setData] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isRefetching, setIsRefetching] = useState(false)
  const [rowCount, setRowCount] = useState(0)
  const [isError, setIsError] = useState(false)

  //table state
  // const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  // const [sorting, setSorting] = useState<SortingState>([])
  const [globalFilter, setGlobalFilter] = useState('')
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })

  // setIsLoading(true)
  const fetchTable = async () => {
    if (!data.length) {
      setIsLoading(true)
    } else {
      setIsRefetching(true)
    }

    const params: ITableParams = {
      size: pagination.pageSize,
      currentPage: pagination.pageIndex + 1,
      // sortBy: sorting,
      // filters: columnFilters,
      // globalFilter: globalFilter,
    }

    try {
      const response = await fetchData(params)
      console.log(response)
      if (response !== null) {
        setData(response)
        setRowCount(1)
      } else {
        setData([])
        setRowCount(0)
      }
    } catch (error) {
      setIsError(true)
      return
    }
    setIsError(false)
    setIsLoading(false)
    setIsRefetching(false)
  }

  useEffect(() => {
    fetchTable()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    // columnFilters, globalFilter,
    pagination.pageIndex,
    pagination.pageSize,
    // sorting
    reload,
  ])
  useEffect(() => {
    console.log('data =>', data)

  }, [data])

  // if(reload){
  //   fetchTable()
  //   hanleReloadCallback()
  // }
  // console.log('render =>=>', data)
  const globalTheme = useTheme(); //(optional) if you already have a theme defined in your app root, you can import here

  const tableTheme = useMemo(
    () =>
      createTheme(
        {

          palette: {
            mode: 'dark', //let's use the same dark/light mode as the global theme
            primary: globalTheme.palette.primary, //swap in the secondary color as the primary for the table
            info: {
              main: 'rgb(255,122,0)', //add in a custom color for the toolbar alert background stuff
            },
            text: {
              primary: globalTheme.palette.mode === 'dark' ? '#fff' : '#000',
              secondary: globalTheme.palette.mode === 'dark' ? '#fff' : '#000',
            },

            background: {
              default:
                globalTheme.palette.mode === 'dark'
                  ? '#fff' //random light yellow color for the background in light mode
                  : '#27293D', //pure black table in dark mode for fun
            },
          },
          typography: {
            button: {
              textTransform: 'none', //customize typography styles for all buttons in table by default
              fontSize: '1.2rem',
            },
            allVariants: {
              color: "white"
            },
          },
          components: {
            MuiButtonBase: {
              defaultProps: {
                disableTouchRipple: true,
              }
            },
            MuiButton: {
              defaultProps: {
                disableTouchRipple: true,
              }
            },
            MuiTableCell: {
              styleOverrides: {
                root: {
                  color: "white"
                }

              }
            },
            MuiTooltip: {
              styleOverrides: {
                tooltip: {
                  fontSize: '1.1rem', //override to make tooltip font size larger
                },
              },
            },
            MuiSwitch: {
              styleOverrides: {
                thumb: {
                  color: 'white', //change the color of the switch thumb in the columns show/hide menu to pink
                },
              },
            },
          },
        }),
    [globalTheme],
  );

  return (
    <ThemeProvider theme={tableTheme}>

      <MaterialReactTable
        enableFullScreenToggle={false}
        enableMultiSort={false}
        enableDensityToggle={false}
        enableColumnResizing={false}
        enableColumnActions={false}
        enableColumnFilters={false}
        enableHiding={false}
        enableEditing={enableEditing}
        positionActionsColumn='last'
        renderRowActions={({ row }) => {
          return (
            <Box>
              {optionEdit && (
                <Tooltip title='Editar'>
                  <IconButton
                    color='primary'
                    size='small'
                    onClick={() => {
                      handle(row, 'edit')
                    }}
                  >
                    <Edit />
                  </IconButton>
                </Tooltip>
              )}
              {optionDelete && (
                <Tooltip title='Eliminar'>
                  <IconButton
                    color='primary'
                    size='small'
                    onClick={() => {
                      handle(row, 'delete')
                    }}
                  >
                    <Delete />
                  </IconButton>
                </Tooltip>
              )}
              {optionRestorePasswd && (
                <Tooltip title='Restablecer contraseña'>
                  <IconButton
                    color='primary'
                    size='small'
                    onClick={() => {
                      handle(row, 'restorePassword')
                    }}
                  >
                    <LockResetIcon />
                  </IconButton>
                </Tooltip>
              )}
            </Box>

          )

        }}
        muiTableBodyCellProps={{
          align: 'center',
          style: { border: '1px solid #dddddd' },
        }}
        displayColumnDefOptions={{
          'mrt-row-actions': {
            header: 'Opciones',
            muiTableHeadCellProps: {
              align: 'center',
            },
            size: 120,
          },
        }}
        columns={useColumns({ name })}
        data={data}
        // enableRowSelection
        getRowId={(row) => row.phoneNumber}
        initialState={{ showColumnFilters: true }}
        // manualFiltering
        manualPagination
        // manualSorting
        muiToolbarAlertBannerProps={
          isError
            ? {
              color: 'error',
              children: 'Error loading data',
            }
            : undefined
        }
        renderTopToolbarCustomActions={() => (
          <Box
            sx={{
              margin: '0',
            }}
          >
            <>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                {TableHeader}
              </Box>
            </>
          </Box>
        )}
        // onColumnFiltersChange={setColumnFilters}
        onGlobalFilterChange={setGlobalFilter}
        onPaginationChange={setPagination}
        // onSortingChange={setSorting}
        rowCount={rowCount}
        state={{
          // columnFilters,
          globalFilter,
          isLoading,
          pagination,
          showAlertBanner: isError,
          showProgressBars: isRefetching,
          // sorting,
        }}
      />
    </ThemeProvider>

  )

}
export default memo(Table)
