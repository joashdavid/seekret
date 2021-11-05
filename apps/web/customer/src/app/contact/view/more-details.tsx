import { Col, Row, Card } from 'antd'
import styles from './view-contact.module.less'

const MoreDetails = () => {
  return (
    <Card
    title="Employment details"
    extra={'Edit'}
    style={{ width: '25.835vw', height: '30.75vh' }}
  >
    <Row>
      <Col span={12}>
        <span className={styles.userDetails}> EMPLOYEE ID </span>
        <Col span={24}>
          <span className={styles.userData}>Lorem Ipsum</span>
        </Col>
      </Col>
      <Col span={12}>
        <span className={styles.userDetails}>DOB</span>
        <Col span={24}>
          <span className={styles.userData}>Lorem Ipsum</span>
        </Col>
      </Col>
    </Row>
    <Row></Row>
    <Row>
      <Col span={12}>
        <span className={styles.userDetails}> GENDRE </span>
        <Col span={24}>
          <span className={styles.userData}>Lorem Ipsum</span>
        </Col>
      </Col>
      <Col span={12}>
        <span className={styles.userDetails}>BLOOD GROUP</span>
        <Col span={24}>
          <span className={styles.userData}>Lorem Ipsum</span>
        </Col>
      </Col>
    </Row>
    <Row>
      <Col span={12}>
        <span className={styles.userDetails}> AADHAR NO. </span>
        <Col span={24}>
          <span className={styles.userData}>Lorem Ipsum</span>
        </Col>
      </Col>
      <Col span={12}>
        <span className={styles.userDetails}>PAN CARD NO.</span>
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
        <span className={styles.userDetails}>UAN NO</span>
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
        <span className={styles.userDetails}>EMERGENCY CONTACT PERSON</span>
        <Col span={24}>
          <span className={styles.userData}>Lorem Ipsum</span>
        </Col>
      </Col>
    </Row>
    <Row>
      <Col span={12}>
        <span className={styles.userDetails}> EMERGENCY CONTACT NUMBER</span>
        <Col span={24}>
          <span className={styles.userData}>Lorem Ipsum</span>
        </Col>
      </Col>
      <Col span={12}>
        <span className={styles.userDetails}>RELATIONSHIP</span>
        <Col span={24}>
          <span className={styles.userData}>Lorem Ipsum</span>
        </Col>
      </Col>
    </Row>
  </Card>
  )
}

export { MoreDetails }
