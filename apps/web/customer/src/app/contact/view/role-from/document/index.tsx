import { Col, Row, Card } from 'antd'
import styles from '../../view-contact.module.less'

const DocumentInfo = () => {
  return (
    <Card
    title="Documents"
    extra={"Edit"}
    style={{ width: "25.835vw", height: "30.75vh" }}
  >
    <Row>
      <Col span={12}>
        <span className={styles.userDetails}>DOCUMENT NAME</span>
        <Col span={24}>
          <span className={styles.userData}>Lorem Ipsum</span>
        </Col>
      </Col>
      <Col span={12}>
        <span className={styles.userDetails}>DOCUMENT NO. </span>
        <Col span={24}>
          <span className={styles.userData}>1234567890</span>
        </Col>
      </Col>
    </Row>
  </Card>
  )
}

export { DocumentInfo }
