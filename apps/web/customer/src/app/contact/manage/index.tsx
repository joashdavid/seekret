/* eslint-disable max-lines */
import { Breadcrumb, Divider, Button } from 'antd'
import { useEffect, useState } from 'react'
import React from 'react'
import { useSelector } from 'react-redux'
import 'antd/dist/antd.css'
import './manage.css'
import { Popconfirm } from 'antd'
import { Input, Select } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useHistory } from 'react-router'

import { ReactComponent as Edit } from './assets/edit.svg'
import { ReactComponent as Archive } from './assets/archive.svg'
import { ReactComponent as Filter } from './assets/filter.svg'
import { ReactComponent as Download } from './assets/download.svg'
import { ReactComponent as Action } from './assets/action.svg'
import { ReactComponent as Fourdots } from './assets/4dots.svg'
import FilterButton from './components/filter/filter'
import { ContactTableModel } from '../model'
import { ContactModel } from '../../../model/model'
import tableStyles from './manage-contact.module.less'
import { Table } from 'antd'
import {
  getContactApi,
  //sendInviteApi,
  // deleteContactApi,
  getCurrentContactDetails,
  //revokeContactApi,
  //archiveContactApi,
} from './api'
// import { ContactInfo } from '../view/role-from/contact-info'

const OWNER = 'Active/Owner'
//const INVITE = 'Invite'
//const REINVITE = 'Reinvite'
//const USER = 'Active'
//const REVOKED = 'Revoked'



const { Search } = Input


const ManageContact = () => {
  const currentOrg = useSelector((state) => state)
  const [contactList, setContactList] = useState<[]>([])
  const [column, setColumn] = useState<string>('')
  //const [invitedId, setInvitedId] = useState<string[]>([])
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




/*
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
*/

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

  const redirectToView = async (contact: ContactTableModel) => {
    const currentContact = await getCurrentContactDetails(contact)
    history.push('/dashboard/viewContact', { data: currentContact.data })
  }

  const rowSelection = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange: (selectedRowKeys: any, selectedRows: any) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
    },
  }

  const columns: ColumnsType<ContactTableModel> = [
    {
      title: 'Name',
      dataIndex: 'contactName',
      width: 360,
      key: 'contactName',
      sorter: true,
      sortDirections: ['descend', 'ascend'],
      render: (index, record: ContactTableModel) => {
        return (
          <p className={tableStyles.user} onClick={() => redirectToView(record)}>
            {record.contactName}
          </p>
        )
      },
    },

    {
      title: 'Contact Type',
      dataIndex: 'contactType',
      width: 240,
      key: 'contactType',
      sorter: true,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Role',
      dataIndex: 'groups',
      width: 286,
      key: 'roles',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNo',
      width: 270,
      key: 'modifiedAt',
    },
    {
      title: 'Last Modified',
      dataIndex: 'modifiedAt',
      width: 460,
      key: 'modifiedAt',
      sorter: true,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Status',
      dataIndex: 'status',
      width: 200,
      key: 'status',
      filters: [{ text: 'Saved', value: 'saved' }, { text: 'Archived', value: 'archived' }],
    },
    /*
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
            {(record.status === 'archived' || record.userStatus === REVOKED) && (
              <Button type="text" style={{ marginRight: 8, color: '#6F91A8', width: '10vh' }}>
                {'Revoked'}
              </Button>
            )}
          </div>
        )
      },
    },
    */
    {
      /*
      title: 'Action',
      */
      dataIndex: 'action',
      width: 30,
      key: 'action',

      render: (index, record: ContactTableModel) => {
        return (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <>
            {record.userStatus !== OWNER && (
              <div>
                <Button
                  type="primary"
                  onClick={() => editContact(record)}
                  style={{ marginRight: 20, background: "transparent", borderColor: "transparent" }}
                  icon={<Action />}
                >
                </Button>
                {/*
                {(record.userStatus !== REVOKED || record.status === 'saved') && (
                  <Button
                    type="primary"
                    onClick={() => archiveContact(record)}
                    style={{ marginRight: 20, background: "transparent", borderColor: "transparent" }}
                    icon={<Archive />}
                  >
                    text
                  </Button>
                )}
                */}
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
      <Breadcrumb>
        <Breadcrumb.Item>Manage - Contact</Breadcrumb.Item>
      </Breadcrumb>
      <div className="title">
        Manage contacts
      </div>
      <Divider />
      <div className="tool-bar-container">
        <Search placeholder="Search Name or Contact type" allowClear bordered={false} onChange={getContact} className="search-bar"/>
        <FilterButton />
        <div className="tool-btn-left-container">
        <Button
          type="text"
          icon={<Archive className="archive-icon"/>}
          className="toolbar-btn"
        >
          ARCHIVE
        </Button>
        <Button
          type="text"
          icon={<Download className="archive-icon"/>}
          className="toolbar-btn"
        >
          DOWNLOAD
        </Button>
        <Button
          type="text"
          icon={<Fourdots className="fourdots-icon"/>}
          className="fourdots-btn"
        >
        </Button>
        </div>
      </div>
      
        <Divider/>
     
      <div className={tableStyles.tableHeader}>
        <Table
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          dataSource={contactList.map((contact: any) => ({ key: contact.contactId, ...contact }))}
          columns={columns}
          onChange={onChange}
          showSorterTooltip={false}
          rowSelection={{ ...rowSelection }}
          scroll={{ y: 550 }}
          tableLayout={"auto"}
        ></Table>
      </div>
    </>
  )
}

export { ManageContact }
