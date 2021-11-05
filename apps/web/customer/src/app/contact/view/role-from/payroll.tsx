import { Col, Row, Card } from 'antd'
import styles from '../view-contact.module.less'

const PayRollInfo = () => {
  return (
    <Card
          title="Payroll & Insurance"
          extra={<a href="#">Edit</a>}
          style={{ width: "25.835vw", height: "30.75vh" }}
        >
          <Row>
            <Col span={12}>
              <span className={styles.userDetails}> NET SALARY </span>
              <Col span={24}>
                <span className={styles.userData}> Lorem Ipsum </span>
              </Col>
            </Col>
            <Col span={12}>
              <span className={styles.userDetails}> CTC </span>
              <Col span={24}>
                <span className={styles.userData}> Lorem Ipsum </span>
              </Col>
            </Col>
          </Row>
          <Row></Row>
          <Row>
            <Col span={12}>
              <span className={styles.userDetails}>INSURANCE PROVIDER</span>
              <Col span={24}>
                <span className={styles.userData}>Lorem Ipsum</span>
              </Col>
            </Col>
            <Col span={12}>
              <span className={styles.userDetails}>INSURANCE STATUS </span>
              <Col span={24}>
                <span className={styles.userData}>Lorem Ipsum</span>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <span className={styles.userDetails}>INSURANCE NUMBER</span>
              <Col span={24}>
                <span className={styles.userData}>Lorem Ipsum</span>
              </Col>
            </Col>
          </Row>
        </Card>
  )
}

export { PayRollInfo }
