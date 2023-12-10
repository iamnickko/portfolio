export default function SectionWrapper({ children, color }) {
  return (
    <div className={color}>
      <div className="max-w-5xl mx-auto py-10 px-5">{children}</div>
    </div>
  );
}
