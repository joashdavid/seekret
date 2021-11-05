/* eslint-disable max-lines */
import { Breadcrumb, Divider, Button } from 'antd'
import { useEffect, useState } from 'react'
import React from 'react'
import { useSelector } from 'react-redux'
import 'antd/dist/antd.css'
import { Popconfirm } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useHistory } from 'react-router'

import { ContactTableModel } from '../model'
import { ContactModel } from '../../../model/model'
import tableStyles from './manage-contact.module.less'
import { Table } from 'antd'
import {
  getContactApi,
  sendInviteApi,
  // deleteContactApi,
  getCurrentContactDetails,
  revokeContactApi,
  archiveContactApi,
} from './api'

const OWNER = 'Active/Owner'
const INVITE = 'Invite'
const REINVITE = 'Reinvite'
const USER = 'Active'
const REVOKED = "Revoked"

const ManageContact = () => {
  const currentOrg = useSelector((state) => state)
  const [contactList, setContactList] = useState<[]>([])
  const [column, setColumn] = useState<string>('')
  const [invitedId, setInvitedId] = useState<string[]>([])
  const history = useHistory()

  const getContact = async () => {
    const response = await getContactApi(currentOrg, 'modifiedAt', 1, 10, 'DESC')
    setColumn('modifiedAt')
    if (response.success) {
      setContactList(response.data)
    }
  }

  useEffect(() => {
    getContact()
  }, [currentOrg])

  const sendInvite = async (contact: ContactTableModel) => {
    const selectedId = [...invitedId, contact.contactId]
    setInvitedId(selectedId)
    const response = await sendInviteApi(contact)
    if (response.success) {
      console.log(response)
    }
  }

  const revokeContact = async (contact: ContactTableModel) => {
    const response = await revokeContactApi(contact.contactId, contact.orgId)
    if (response.success) {
      getContact()
    }
  }

  // const deleteContact = async (contact: ContactTableModel) => {
  //   const response = await deleteContactApi(contact)
  //   if (response.success) {
  //     getContact()
  //   }
  // }
  const archiveContact = async (contact: ContactTableModel) => {
    const response = await archiveContactApi(contact)
    console.log(response)
    if (response.success) {
      getContact()
    }
  }

  const editContact = async (contact: ContactTableModel) => {
    const currentContact = await getCurrentContactDetails(contact)
    if (currentContact.success) {
      if (currentContact.data.contactType === 'individual')
        redirectToIndividualForm(currentContact.data)
      else redirectTocompanyForm(currentContact.data)
    }
  }

  const redirectToIndividualForm = (data: ContactModel) => {
    history.push('/dashboard', { data, isIndividualChecked: true })
  }

  const redirectTocompanyForm = (data: ContactModel) => {
    history.push('/dashboard', { data, isCompanyChecked: true })
  }

  const redirectToView = async(contact: ContactTableModel) => {
    const currentContact = await getCurrentContactDetails(contact)
    history.push('/dashboard/viewContact', { data:currentContact.data })
  }

  const columns: ColumnsType<ContactTableModel> = [
    {
      title: 'Name',
      dataIndex: 'contactName',
      width: 350,
      key: 'contactName',
      sorter: true,
      sortDirections: ['descend', 'ascend'],
      render: (index, record: ContactTableModel) => {
        return( <p onClick={()=>redirectToView(record)}>{record.contactName}</p>)
      }
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
      title: 'Groups',
      dataIndex: 'groups',
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
      title: 'Contact Status',
      dataIndex: 'status',
      width: 200,
      key: 'status',
    },
    {
      title: 'User Status',
      dataIndex: 'userStatus',
      width: 170,
      key: 'status',
      render: (index, record: ContactTableModel) => {
        return (
          <div>
            {record.userStatus === OWNER && (
              <Button type="text" style={{ marginRight: 8, color: '#6F91A8', width: '10vh' }}>
                {'Owner'}
              </Button>
            )}
            {record.userStatus === INVITE && record.status !== 'archived' ? (
              <Button
                type="primary"
                onClick={() => sendInvite(record)}
                style={{ marginRight: 8, color: '#fff', width: '10vh' }}
              >
                {invitedId.includes(record.contactId) ? 'Reinvite' : 'Invite'}
              </Button>
            ) : (
              ''
            )}
            {record.userStatus === REINVITE && record.status !== 'archived' && (
              <Button
                type="primary"
                onClick={() => sendInvite(record)}
                style={{ marginRight: 8, color: '#fff', width: '10vh' }}
              >
                {'Reinvite'}
              </Button>
            )}
            {record.userStatus === USER && (
              <Popconfirm
                placement="bottomLeft"
                title={'Revoke the access?'}
                onConfirm={() => revokeContact(record)}
                okText="Yes"
                cancelText="No"
                style={{ color: 'red', width: '10vh' }}
              >
                <Button type="primary" style={{ marginRight: 8, color: '#fff', width: '10vh' }}>
                  {'User'}
                </Button>
              </Popconfirm>
            )}
            {(record.status === 'archived' || record.userStatus === REVOKED ) && (
              <Button type="text" style={{ marginRight: 8, color: '#6F91A8', width: '10vh' }}>
                {'Revoked'}
              </Button>
            )}
          </div>
        )
      },
    },
    {
      title: 'Action',
      dataIndex: 'action',
      width: 300,
      key: 'action',

      render: (index, record: ContactTableModel) => {
        return (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <>
            {record.userStatus !== OWNER && (
              <div>
                <Button
                  type="text"
                  onClick={() => editContact(record)}
                  style={{ marginRight: 8, color: '#33B986' }}
                >
                  Edit
                </Button>
                {( record.userStatus !== REVOKED || record.status === "saved")  && (
                  <Button
                    type="text"
                    onClick={() => archiveContact(record)}
                    style={{ marginRight: 8 }}
                    danger
                  >
                    Archive
                  </Button>
                )}
              </div>
            )}
          </>
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
            total: 20,
          }}
        ></Table>
      </div>
    </>
  )
}

export { ManageContact }
