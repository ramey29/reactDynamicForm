import React from 'react'
import { FormSection, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'

import FormGenerator from './FormGenerator'

const PageTemplate = props => {
  const { handleSubmit, isShown } = props

  if (!isShown) {
    return <div />
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: 15 }}>
      <FormSection component="div">
        <Row>
          <Col md={7}>
            <FormGenerator />
            <button type="submit" style={{ float: 'right' }}>
              Submit
            </button>
          </Col>
        </Row>
      </FormSection>
    </form>
  )
}

PageTemplate.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isShown: PropTypes.bool.isRequired,
  stepName: PropTypes.string,
  documentsTypes: PropTypes.arrayOf(PropTypes.shape())
}

const PageTemplateForm = reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(PageTemplate)

export default PageTemplateForm