import { Breadcrumb, Divider, Button, Input } from 'antd'
import { useEffect, useState } from 'react'
import React from 'react'
import { useHistory } from 'react-router-dom'
import 'antd/dist/antd.css'
import { ColumnsType } from 'antd/es/table'

import tableStyles from './manage-org.module.less'
import { Table } from 'antd'
import { getOrgApi, setDefaultOrgApi } from './api'
import { OrgModel } from './model'

const ManageOrg = () => {
  const [orgList, setOrgList] = useState<OrgModel[]>([])
  const [column, setColumn] = useState<string>('')

  const history = useHistory()
  useEffect(() => {
    const getOrg = async () => {
      const response = await getOrgApi('modifiedAt', 1, 10, 'DESC')
      console.log(response)
      setColumn('modifiedAt')
      setOrgList(response.data)
    }
    getOrg()
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getOrgDetails = (record: any) => {
    history.push('/dashboard/createOrg', record)
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setDefaultOrg = async (record: any) => {
    await setDefaultOrgApi(record.orgId)
  }
  const columns: ColumnsType<OrgModel> = [
    {
      title: 'Default',
      dataIndex: 'default',
      width: 100,
      key: 'default',
      render: (index, record: OrgModel) => {
        return (
          <Input
            bordered={false}
            type="radio"
            value={record.orgId}
            name="default"
            onChange={() => {
              setDefaultOrg(record)
            }}
          />
        )
      },
    },
    {
      title: 'Organization Name',
      dataIndex: 'orgName',
      width: 450,
      key: 'orgName',
      sorter: true,
      sortDirections: ['descend', 'ascend'],
    },

    {
      title: 'Organization Short Name',
      dataIndex: 'orgShortName',
      width: 250,
      key: 'orgShortName',
      sorter: true,
      sortDirections: ['descend', 'ascend'],
    },

    {
      title: 'Last Modified',
      dataIndex: 'modifiedAt',
      width: 450,
      key: 'modifiedAt',
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
      width: 250,
      key: 'owner',
    },

    {
      title: 'Action',
      dataIndex: 'Edit',
      width: 200,
      key: 'Edit',
      render: (index, record: OrgModel) => {
        return (
          <Button type="primary" onClick={() => getOrgDetails(record)} style={{ marginRight: 8 }}>
            Edit
          </Button>
        )
      },
    },
  ]

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = async (pagination: any, filters: any, sorter: any) => {
    console.log(sorter)
    if (sorter.columnKey) {
      setColumn(sorter.columnKey)
    }
    const response = await getOrgApi(
      column,
      pagination.current,
      pagination.pageSize,
      sorter.order === 'ascend' ? 'ASC' : 'DESC'
    )
    setOrgList(response.data)
  }
 

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Manage. Organization</Breadcrumb.Item>
      </Breadcrumb>
      <Divider />
      <div className={tableStyles.tableHeader}>
        <Table
          dataSource={orgList}
          columns={columns}
          onChange={onChange}
          showSorterTooltip={false}
          pagination={{
            position: ['topRight'],
            total: 20,
          }}
        ></Table>
      </div>
    </>
  )
}

export { ManageOrg }
