import { Breadcrumb, Divider, Button } from 'antd'
import { useEffect, useState } from 'react'
import React from 'react'
import 'antd/dist/antd.css'
import { ColumnsType } from 'antd/es/table'
import { ContactModel } from '../model'
// import { store } from '../../store'
// import moment from 'moment'

import tableStyles from './manage-contact.module.less'
import { Table } from 'antd'
import { getContactApi, sendInviteApi } from './api'

const ManageContact = () => {
  const [contactList, setContactList] = useState<[]>([])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [currentOrg, setCurrentOrg] = useState<any>()
  // store.subscribe(() => {
  //  setCurrentOrg(store.getState())
  // })
    const getContact = async () => {
      const response = await getContactApi()
      
      if(response.success){
        setContactList(response.data)
      }
      console.log("response",response)
    }
    useEffect(() => {
      getContact()
    })

    useEffect(() => {
      getContact()
    }, [currentOrg])
  
    const sendInvite = async(contact:ContactModel) => {
      const response = await sendInviteApi(contact)
      if(response.success){
        console.log(response)
      }
    }
  

  
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
    },
    {
      title: 'Roles',
      dataIndex: 'roles',
      width: 250,
      key: 'roles',
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
          <Button type="primary" onClick={()=>sendInvite(record)} style={{ marginRight: 8 }}>
            Invite
          </Button>
        )
      },
    },
  ]

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const onChange = async (pagination: any, filters: any, sorter: any) => {
  //   if (sorter.columnKey) {
  //     setColumn(sorter.columnKey)
  //   }
  //   const response = await getContactApi(store.getState())
  //   setContactList(response.data)
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
          // onChange={onChange}
          // dataSourceIndexOffset={10}
          showSorterTooltip={false}
          // position={["topRight"]}
          pagination={{
            position: ['topRight'],
            total: 50,
            // onChange:{onChangePage}
          }}
        ></Table>
      </div>
    </>
  )
}

export { ManageContact }
