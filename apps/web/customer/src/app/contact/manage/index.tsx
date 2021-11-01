import { Breadcrumb, Divider, Button } from 'antd'
import { useEffect, useState } from 'react'
import React from 'react'
import { useSelector } from 'react-redux'
import 'antd/dist/antd.css'
import { ColumnsType } from 'antd/es/table'
import { useHistory } from 'react-router'
// import { store } from '../../store'
// import moment from 'moment'

import { ContactTableModel } from '../model'
import {ContactModel} from '../../../model/model'
import tableStyles from './manage-contact.module.less'
import { Table } from 'antd'
import { getContactApi, sendInviteApi, deleteContactApi, getCurrentContactDetails } from './api'

const ManageContact = () => {
  const currentOrg = useSelector((state) => state)
  const [contactList, setContactList] = useState<[]>([])
  const [column, setColumn] = useState<string>('')
  const history = useHistory()

  const getContact = async () => {
    const response = await getContactApi(currentOrg, 'modifiedAt', 1, 10, 'DESC')
    setColumn('modifiedAt')
    if (response.success) {
      setContactList(response.data)
    }
    console.log('response', response)
  }

  useEffect(() => {
    getContact()
  }, [currentOrg])

  const sendInvite = async (contact: ContactTableModel) => {
    const response = await sendInviteApi(contact)
    if (response.success) {
      console.log(response)
    }
  }

  const deleteContact = async(contact:ContactTableModel) => {
    const response = await deleteContactApi(contact)
    if(response.success){
      getContact()
    }
  }

  const editContact = async (contact:ContactTableModel) => {
    const currentContact = await getCurrentContactDetails(contact)
    if(currentContact.success){
      if(currentContact.data.contactType === "individual")
        redirectToIndividualForm(currentContact.data)
      else 
        redirectTocompanyForm(currentContact.data)
    }
  }

  const redirectToIndividualForm = (data:ContactModel) => {
    history.push('/dashboard',{data,isIndividualChecked:true})
  }

  const redirectTocompanyForm = (data:ContactModel) => {
    history.push('/dashboard',{data,isCompanyChecked:true})
  }

  const columns: ColumnsType<ContactTableModel> = [
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
      title: 'Phone Number',
      dataIndex: 'phoneNo',
      width: 200,
      key: 'modifiedAt',
    },
    {
      title: 'Last Modified',
      dataIndex: 'modifiedAt',
      width: 200,
      key: 'modifiedAt',
    },

    {
      title: 'Action',
      dataIndex: 'Edit',
      width: 300,
      key: 'Edit',

      // eslint-disable-next-line @typescript-eslint/naming-convention
      render: (_, record: ContactTableModel) => {
        return (
          <div>
            <Button
              type="text"
              onClick={() => sendInvite(record)}
              style={{ marginRight: 8, color: '#6F91A8' }}
            >
              Invite
            </Button>

            <Button
              type="text"
              onClick={() => editContact(record)}
              style={{ marginRight: 8, color: '#33B986' }}
            >
              Edit
            </Button>
            <Button
              type="text"
              onClick={() => deleteContact(record)}
              style={{ marginRight: 8 }}
              danger
            >
              Delete
            </Button>
          </div>
        )
      },
    },
  ]

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = async (pagination: any, filters: any, sorter: any) => {
    if (sorter.columnKey) {
      setColumn(sorter.columnKey)
    }
    const response = await getContactApi(
      currentOrg,
      column,
      pagination.current,
      pagination.pageSize,
      sorter.order === 'ascend' ? 'ASC' : 'DESC'
    )
    setContactList(response.data)
  }
  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Manage. Contact</Breadcrumb.Item>
      </Breadcrumb>
      <Divider />
      <div className={tableStyles.tableHeader}>
        <Table
          dataSource={contactList}
          columns={columns}
          onChange={onChange}
          showSorterTooltip={false}
          pagination={{
            position: ['topRight'],
            total: 50,
          }}
        ></Table>
      </div>
    </>
  )
}

export { ManageContact }
