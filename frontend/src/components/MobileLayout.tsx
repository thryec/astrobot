interface MobileLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export const MobileLayout: React.FC<MobileLayoutProps> = ({
  children,
  header,
  footer,
}) => {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-50">
      {/* Safe area padding for notched phones */}
      {header && (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 py-3 safe-top">
          {header}
        </header>
      )}

      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-auto">{children}</main>

      {/* Footer/Navigation */}
      {footer && (
        <footer className="sticky bottom-0 z-50 bg-white border-t border-gray-200 safe-bottom">
          {footer}
        </footer>
      )}
    </div>
  );
};
