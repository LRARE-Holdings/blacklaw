export default function SiteFooter() {
  const year = 2026;
  return (
    <footer className="ftr">
      <div className="container">
        <div className="ftr-top">
          <div>
            <div className="ftr-brand">Blacklaw</div>
            <div className="ftr-tag">Walk in knowing.</div>
          </div>
          <div className="ftr-cols">
            <div className="ftr-col">
              <h4>Product</h4>
              <a href="/features">Features</a>
              <a href="/sqe2">SQE2</a>
              <a href="/pricing">Pricing</a>
            </div>
            <div className="ftr-col">
              <h4>Company</h4>
              <a href="/about">About</a>
              <a href="/support">Support</a>
            </div>
            <div className="ftr-col">
              <h4>Legal</h4>
              <a href="/terms">Terms of Use</a>
              <a href="/privacy">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div className="ftr-bottom">
          <span>© {year} Blacklaw · a Pellar product</span>
          <span>
            Independent of the Solicitors Regulation Authority and the assessment provider.
          </span>
        </div>
      </div>
    </footer>
  );
}
