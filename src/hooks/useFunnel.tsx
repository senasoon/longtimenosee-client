import React, { Children, isValidElement, useState } from 'react';

interface FunnelProps {
  children: React.ReactNode;
}

interface StepProps<Steps extends readonly string[]> {
  name: Steps[number];
  children: React.ReactNode;
}
const useFunnel = <Steps extends readonly string[]>(
  steps: Steps,
  initialStep: Steps[number],
  stepQueryKey?: Steps[number]
) => {
  const [step, setStep] = useState<Steps[number]>(stepQueryKey ?? initialStep);

  const Step = <Steps extends readonly string[]>({ children }: StepProps<Steps>) => {
    return <>{children}</>;
  };

  const Funnel = ({ children }: FunnelProps) => {
    const validChildren = Children.toArray(children)
      .filter(isValidElement)
      .filter((i) => steps.includes((i.props as StepProps<Steps>).name ?? ''));
    const targetStep = validChildren.find(
      (child) => (child.props as StepProps<Steps>).name === step
    );

    return <>{targetStep}</>;
  };

  const FunnelElement = Object.assign(
    (props: FunnelProps) => {
      return <Funnel {...props} />;
    },
    { Step }
  );

  return [FunnelElement, setStep] as const;
};

export default useFunnel;
