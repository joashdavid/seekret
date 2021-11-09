import { ContactDetailModel } from '../../../../../../model/model'

import { MoreDetailsEmployeeInternModal } from './employee-intern'
import { MoreDetailsVendorClientModal } from './vendor-client'

const MoreDetailsModal = (props: {
  onOk: () => void
  onCancel: () => void
  data: ContactDetailModel | undefined
  orgId: string | null
  isModalVisible: boolean | undefined
  group: string
}) => {
  const handleOk = () => {
    props.onOk()
  }
  const handleCancel = () => {
    props.onCancel()
  }

  if (props.group === 'Employee' || props.group === 'Intern' || props.group === 'Consultant') {
    return (
      <MoreDetailsEmployeeInternModal
        data={props.data}
        group={props.group}
        orgId={props.orgId}
        onOk={handleOk}
        onCancel={handleCancel}
        isModalVisible={props.isModalVisible}
      />
    )
  } else if (props.group === 'Vendor' || props.group === 'Client') {
    return (
      <MoreDetailsVendorClientModal
        data={props.data}
        group={props.group}
        orgId={props.orgId}
        onOk={handleOk}
        onCancel={handleCancel}
        isModalVisible={props.isModalVisible}
      />
    )
  } else {
    return <p></p>
  }
}
export { MoreDetailsModal }
