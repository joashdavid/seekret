import { Col, Row, Card } from 'antd'
import { ContactModel } from '../../../../model/model'
import styles from '../view-contact.module.less'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BankInfo = (props:{data:ContactModel}) => {
  return (
    <Card title="Bank Details" extra={'Edit'} style={{ width: '25.835vw', height: '30.75vh' }}>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}> Bank </span>
          <Col span={24}>
            <span className={styles.userData}> {props.data.bankName?props.data.bankName:"NIL"} </span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}> Account Number </span>
          <Col span={24}>
            <span className={styles.userData}> {props.data.bankAccount?props.data.bankAccount:"NIL"} </span>
          </Col>
        </Col>
      </Row>
      <Row></Row>
      <Row>
        <Col span={12}>
          <span className={styles.userDetails}>IFSC Code</span>
          <Col span={24}>
            <span className={styles.userData}>{props.data.ifsc?props.data.ifsc:"NIL"}</span>
          </Col>
        </Col>
        <Col span={12}>
          <span className={styles.userDetails}>SWIFT </span>
          <Col span={24}>
            <span className={styles.userData}>{props.data.swift?props.data.swift:"NIL"}</span>
          </Col>
        </Col>
      </Row>
    </Card>
  )
}

export { BankInfo }
