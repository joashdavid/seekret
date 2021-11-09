import { ContactDetailModel } from '../../../../../../model/model'

import { EmployeInternModal } from './employee-intern'
import { ConsultantModal } from './consultant'
import { VendorClientModal } from './vendor-client'

const EmployeModal = (props: {
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

  if (props.group === 'Employee' || props.group === 'Intern') {
    return (
      <EmployeInternModal
        onOk={handleOk}
        onCancel={handleCancel}
        orgId={props.orgId}
        isModalVisible={props.isModalVisible}
        data={props.data}
        group={props.group}
      />
    )
  } else if (props.group === 'Consultant') {
    return (
      <ConsultantModal
        data={props.data}
        isModalVisible={props.isModalVisible}
        group={props.group}
        orgId={props.orgId}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    )
  } else if (props.group === 'Vendor') {
    return (
      <VendorClientModal
        data={props.data}
        isModalVisible={props.isModalVisible}
        group={props.group}
        orgId={props.orgId}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    )
  } else {
    return <p></p>
  }
}

export { EmployeModal }
