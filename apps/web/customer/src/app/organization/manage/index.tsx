import { Breadcrumb, Typography, Divider } from 'antd'
import { useEffect, useState } from 'react'
import React from 'react'
import { useHistory } from 'react-router-dom'
import 'antd/dist/antd.css'
import { ColumnsType } from 'antd/es/table'
import moment from 'moment'

import tableStyles from './manage-org.module.less'
import { Table } from 'antd'
import { getOrgApi } from './api'
import { OrgModel } from './model'

const ManageOrg = () => {
  const [orgList, setOrgList] = useState<OrgModel[]>([])
  const { Text } = Typography
  const history = useHistory()
  const getOrg = async () => {
    const response = await getOrgApi()
    console.log(response.data)
    setOrgList(response.data)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getOrgDetails = (record: any) => {
    history.push('/dashboard/createOrg',record)
    
    
  }
  const columns: ColumnsType<OrgModel> = [
    {
      title: 'Organization Name',
      dataIndex: 'orgName',
      width: 450,
      key: 'orgId',
      sorter: (a, b) => a.orgName.length - b.orgName.length,
      sortDirections: ['descend', 'ascend'],
    },

    {
      title: 'Organization Short Name',
      dataIndex: 'orgShortName',
      width: 250,
      key: 'orgId',
      sorter: (a, b) => a.orgShortName.length - b.orgShortName.length,
      sortDirections: ['descend', 'ascend'],
    },

    {
      title: 'Last Modified',
      dataIndex: 'modifiedAt',
      width: 450,
      key: 'orgId',
      sorter: (a, b) => moment(a.modifiedAt).unix() - moment(b.modifiedAt).unix(),
    },
    {
      title: 'Action',
      dataIndex: 'Edit',
      width: 200,
      key: 'orgId',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (_:any,record: OrgModel) => {
          return(
        <span>
          <a href="javascript:;" onClick={() => getOrgDetails(record)} style={{ marginRight: 8 }}>
            Edit
          </a>
        </span>)
      },
    },
  ]

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onChange(sorter: any, extra: any) {
    console.log(sorter, extra)
  }

  useEffect(() => {
    getOrg()
  }, [])
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
        //   onRow={(record, recordIndex) => ({
        //     onClick: (event) => {
        //       getOrgDetails(event.target, record, recordIndex)
        //     },
        //   })}
        ></Table>
      </div>
    </>
  )
}

export { ManageOrg }
