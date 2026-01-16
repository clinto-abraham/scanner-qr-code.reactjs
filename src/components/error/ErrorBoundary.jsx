import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Future: send to Sentry / backend
    console.error(
      '[ErrorBoundary]',
      this.props.name,
      this.props.location,
      error,
      errorInfo
    );
  }

  reset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    const { hasError, error } = this.state;
    const { name, location } = this.props;

    if (hasError) {
      return (
        <div
          style={{
            padding: '1rem',
            border: '1px solid #f87171',
            background: '#fff5f5',
            borderRadius: '8px',
            margin: '1rem 0',
          }}
        >
          <strong>⚠️ {name} failed</strong>

          <p style={{ fontSize: '0.85rem', margin: '0.25rem 0' }}>
            📍 {location}
          </p>

          <p style={{ fontSize: '0.85rem', color: '#7f1d1d' }}>
            {error?.message}
          </p>

          <button
            onClick={this.reset}
            style={{ marginTop: '0.5rem' }}
          >
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
