import { Breadcrumb, Typography, Divider } from 'antd'
import { useEffect,useState } from 'react'
import React from 'react'
import 'antd/dist/antd.css'
import { ColumnsType } from "antd/es/table"
import moment from 'moment'

// import  tableStyles from './cyc-table.module.less'
import { Table } from 'antd'
import { getOrgApi } from './api'
import { OrgModel } from './model'

const ManageOrg = () => {
    const [orgList, setOrgList] = useState<OrgModel[]>([])
  const { Text } = Typography
  const getOrg = async() => {
      const response = await getOrgApi()
      console.log(response.data)
      setOrgList(response.data)
  }
  const columns: ColumnsType<OrgModel> = [
    {
        title: 'Organization Name',
        dataIndex: 'orgName',
        width:450,
        key:'orgId',
        sorter: (a, b) => 
        a.orgName.length - b.orgName.length,
        sortDirections: ['descend', 'ascend']
    },
  
    {
        title: 'Organization Short Name',
        dataIndex: 'orgShortName',
        width:250,
        key:'orgId',
        sorter: (a, b) => 
        a.orgShortName.length - b.orgShortName.length,
        sortDirections: ['descend', 'ascend']
    },
  
    {
        title: 'Last Modified',
        dataIndex: 'lastModified',
        width:450,
        key:'orgId',
        sorter: (a, b) => moment(a.lastModified).unix() - moment(b.lastModified).unix()
    },
    {
        title: 'Action',
        dataIndex: 'Edit',
        width:200,
        key:'orgId',        
    }
  ]


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function onChange( sorter: any, extra: any) {
    console.log( sorter, extra)
  }
  
  useEffect(()=>{
    getOrg()
  },[])
  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Manage. Organization</Breadcrumb.Item>
      </Breadcrumb>
      <Text strong>Manage Organization</Text>
      <Divider />
      <Table
        dataSource = {orgList} 
        columns = {columns}
        onChange={onChange}
        >

        </Table>
    </>
  )
}

export { ManageOrg }
