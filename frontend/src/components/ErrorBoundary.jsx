import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Log to console for diagnostics
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#050806] text-white p-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-3">Something went wrong</h2>
            <pre className="whitespace-pre-wrap text-sm bg-[#0b1410] p-4 rounded">{String(this.state.error && this.state.error.stack ? this.state.error.stack : this.state.error)}</pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
