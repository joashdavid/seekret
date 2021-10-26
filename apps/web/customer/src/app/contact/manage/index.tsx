
import { Breadcrumb, Divider, Button } from 'antd'
import { useEffect, useState } from 'react'
import React from 'react'
import 'antd/dist/antd.css'
import { ColumnsType } from 'antd/es/table'
import { ContactModel } from '../model'
// import moment from 'moment'

import tableStyles from './manage-contact.module.less'
import { Table } from 'antd'
import { getContactApi } from './api'


const ManageContact = () => {
  const [contactList, setContactList] = useState<[]>([])
  const [column,setColumn] = useState<string>('')

  useEffect(() => {
    const getOrg = async () => {
      const response = await getContactApi()
      console.log(response)
      setColumn("modifiedAt")
      // setOrgList("fd")
      setContactList(response.data)
    }
    getOrg()
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns: ColumnsType<ContactModel> = [
    {
      title: 'Name',
      dataIndex: 'contactName',
      width: 350,
      key: 'contactName',
      sorter: true,
      sortDirections: ['descend', 'ascend'],
    },

    {
      title: 'Contact Type',
      dataIndex: 'contactType',
      width: 250,
      key: 'contactType',
      sorter: true,
      sortDirections: ['descend', 'ascend'],
    },{
      title: 'Roles',
      dataIndex: 'roles',
      width: 250,
      key: 'roles'
    },
    {
      title: 'Last Modified',
      dataIndex: 'modifiedAt',
      width: 200,
      key: 'modifiedAt',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNo',
      width: 200,
      key: 'modifiedAt',
    },
    {
      title: 'Action',
      dataIndex: 'Edit',
      width: 200,
      key: 'Edit',

      // eslint-disable-next-line @typescript-eslint/naming-convention
      render: (_, record: ContactModel) => {
        return (
          <Button type="primary" onClick={() =>console.log(record)} style={{ marginRight: 8 }}>
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
    const response = await getContactApi()
    setContactList(response.data)
  }
  // const onChangePage = (page:number,pageSize:number|undefined) =>{
  //   console.log(page, pageSize)
  // }

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Manage. Organization</Breadcrumb.Item>
      </Breadcrumb>
      <Divider />
      <div className={tableStyles.tableHeader}>
        <Table
          dataSource={contactList}
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

export { ManageContact }
