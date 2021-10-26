/* eslint-disable @typescript-eslint/naming-convention */
import { Breadcrumb, Typography, Divider } from 'antd'
import { useEffect, useState } from 'react'
import React from 'react'
import { useHistory } from 'react-router-dom'
import 'antd/dist/antd.css'
import { ColumnsType } from 'antd/es/table'
// import moment from 'moment'

import tableStyles from './manage-org.module.less'
import { Table } from 'antd'
import { getOrgApi } from './api'
import { OrgModel } from './model'

const ManageOrg = () => {
  const [orgList, setOrgList] = useState<OrgModel[]>([])

  const { Text } = Typography
  const history = useHistory()
  useEffect(() => {
    const getOrg = async () => {
      const response = await getOrgApi('Name', 1, 10, 'ASC')
      console.log('initial', response.data)
      setOrgList(response.data)
    }
    getOrg()
  }, [])
  

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getOrgDetails = (record: any) => {
    history.push('/dashboard/createOrg', record)
  }
  const columns: ColumnsType<OrgModel> = [
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
      title: 'Action',
      dataIndex: 'Edit',
      width: 200,
      key: 'Edit',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (_, record: OrgModel) => {
        return (
          <span>
            <a href="javascript:;" onClick={() => getOrgDetails(record)} style={{ marginRight: 8 }}>
              Edit
            </a>
          </span>
        )
      },
    },
  ]

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = async (pagination: any, filters: any, sorter: any) => {
    console.log(sorter)
    const response = await getOrgApi(
      sorter.columnKey === 'orgName' ? 'Name' : 'Short Name',
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
      <Text strong>Manage Organization</Text>
      <Divider />
      <div className={tableStyles.tableHeader}>
        <Table
          dataSource={orgList}
          columns={columns}
          onChange={onChange}
        ></Table>
      </div>
    </>
  )
}

export { ManageOrg }
