import { Col, Row, Card } from 'antd'
import styles from '../view-contact.module.less'

const MoreDetails = () => {
  return (
    <Card
    title="More Details"
    extra={
      <a href="#" className={styles.a}>
        Edit
      </a>
    }
    style={{ width: "25.835vw", height: "30.75vh" }}
  >
    <Row>
      <Col span={12}>
        <span className={styles.userDetails}> Business Unit </span>
        <Col span={24}>
          <span className={styles.userData}>Lorem Ipsum</span>
        </Col>
      </Col>
      <Col span={12}>
        <span className={styles.userDetails}>Department</span>
        <Col span={24}>
          <span className={styles.userData}>IT</span>
        </Col>
      </Col>
    </Row>
    <Row></Row>
    <Row>
      <Col span={12}>
        <span className={styles.userDetails}> DESIGNATION </span>
        <Col span={24}>
          <span className={styles.userData}>Lorem Ipsum</span>
        </Col>
      </Col>
      <Col span={12}>
        <span className={styles.userDetails}>REPORT TO</span>
        <Col span={24}>
          <span className={styles.userData}>Lorem Ipsum</span>
        </Col>
      </Col>
    </Row>
    <Row>
      <Col span={12}>
        <span className={styles.userDetails}> EMPLOYMENT TYPE </span>
        <Col span={24}>
          <span className={styles.userData}>Lorem Ipsum</span>
        </Col>
      </Col>
      <Col span={12}>
        <span className={styles.userDetails}>EMPLOYMENT STATUS</span>
        <Col span={24}>
          <span className={styles.userData}>Lorem Ipsum</span>
        </Col>
      </Col>
    </Row>
    <Row>
      <Col span={12}>
        <span className={styles.userDetails}> OFFICE LOCATION </span>
        <Col span={24}>
          <span className={styles.userData}>Lorem Ipsum</span>
        </Col>
      </Col>
      <Col span={12}>
        <span className={styles.userDetails}>JOINING DATE</span>
        <Col span={24}>
          <span className={styles.userData}>Lorem Ipsum</span>
        </Col>
      </Col>
    </Row>
    <Row>
      <Col span={12}>
        <span className={styles.userDetails}> NOTICE PERIOD </span>
        <Col span={24}>
          <span className={styles.userData}>Lorem Ipsum</span>
        </Col>
      </Col>
      <Col span={12}>
        <span className={styles.userDetails}>BUSINESS UNIT</span>
        <Col span={24}>
          <span className={styles.userData}>Lorem Ipsum</span>
        </Col>
      </Col>
    </Row>
  </Card>
  )
}

export { MoreDetails }
