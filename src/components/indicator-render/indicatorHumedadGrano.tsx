interface IndicatorHumedadGranoProps {
  content: string;
  description: string;
}

export const IndicatorHumedadGrano: React.FC<IndicatorHumedadGranoProps> = ({
  content,
  description,
}) => {
  return (
    <>
      <div className="indicator-container breakpoint-default">
        <h5 className="indicator-description indicator-text">
          {description.charAt(0).toUpperCase() + description.slice(1)}
        </h5>
        <h2 className="indicator-content indicator-text">
          {parseInt(content)} %
        </h2>
      </div>
    </>
  );
};
