/* eslint-disable @typescript-eslint/naming-convention */
import { Breadcrumb, Typography, Divider, Button } from 'antd'
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
  const [column,setColumn] = useState<string>('')

  const { Text } = Typography
  const history = useHistory()
  useEffect(() => {
    const getOrg = async () => {
      const response = await getOrgApi('modifiedAt', 1, 10, 'DESC')
      setColumn("modifiedAt")
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
    if(sorter.columnKey){
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
  // const onChangePage = (page:number,pageSize:number|undefined) =>{
  //   console.log(page, pageSize)
  // }

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
          // dataSourceIndexOffset={10}
          showSorterTooltip={false}
          // position={["topRight"]}
          pagination={{
            position: ["topRight"],
            total:50
            // onChange:{onChangePage}
          }}
        ></Table>
      </div>
    </>
  )
}

export { ManageOrg }
