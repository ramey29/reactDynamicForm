import React from 'react'
import WizardContextProvider, { WizardContext } from './ContextProvider'
import PageTemplate from './PageTemplate'
import steps from '../../mockData'

const NewWizard = props => (
  <WizardContext.Consumer>
    {({ currentStepIndex, steps, goToStep }) => {

      return (
        <div>
          {steps.map((step, index) => (
            <PageTemplate
              key={`wizardStep_${index + 1}`}
              isShown={currentStepIndex === index}
              onSubmit={goToStep()}
            />
          ))}
        </div>
      )
    }}
  </WizardContext.Consumer>
)

export default () => (
  <WizardContextProvider steps={steps}>
    <NewWizard />
  </WizardContextProvider>
)