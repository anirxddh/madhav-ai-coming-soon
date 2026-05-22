export default function EditorialGrid() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-5 z-0 sm:inset-10 lg:inset-16"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(26,26,26,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(26,26,26,0.04) 1px, transparent 1px)
          `,
          backgroundPosition: "top left",
          backgroundSize: "calc(100% / 2) 100%, 100% 168px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-10 z-0 hidden md:block lg:hidden"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(26,26,26,0.05) 1px, transparent 1px)",
          backgroundPosition: "top left",
          backgroundSize: "calc(100% / 6) 100%",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-16 z-0 hidden lg:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(26,26,26,0.055) 1px, transparent 1px)",
          backgroundPosition: "top left",
          backgroundSize: "calc(100% / 12) 100%",
        }}
      />
    </>
  );
}
