import Icon from "@/components/Icon/Icon";

type HeadingWidgetPropTypes = {
  title: string;
  description: string;
};

const HeadingWidget = (props: HeadingWidgetPropTypes) => {
  const { title, description } = props;

  return (
    <div className="flex justify-center items-center flex-col pb-10 uppercase font-bold">
      <div className="flex gap-2 justify-center items-center pb-2">
        <Icon icon="broomFill" className="fill-orange-shade" size={16} />
        <p
          className="text-purple tracking-wide mb-1
        text-fluid-base leading-fluid-base"
        >
          {title}
        </p>
      </div>
      <p className="description capitalize text-purple tracking-wide mb-1 max-w-3xl text-center text-fluid-h4 leading-fluid-h4">
        {description}
      </p>
    </div>
  );
};

export default HeadingWidget;
