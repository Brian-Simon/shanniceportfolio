'use client';

import React, { ReactNode, Component, ErrorInfo } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
  sectionName?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary Component
 * Catches errors from child components and displays a fallback UI
 * Prevents entire app from crashing if a section fails
 */
export class ErrorBoundary extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', {
      error,
      errorInfo,
      sectionName: this.props.sectionName,
    });

    // You could also log the error to an error reporting service here
  }

  public render() {
    if (this.state.hasError) {
      return (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-20 md:py-32 px-4"
        >
          <div className="container mx-auto max-w-2xl">
            <div className="glass rounded-2xl p-8 md:p-12 text-center">
              <div className="text-6xl mb-4">⚠️</div>
              <h2 className="text-2xl md:text-3xl font-bold font-grotesk text-gray-900 mb-4">
                Something went wrong
              </h2>
              <p className="text-gray-600 mb-6">
                {this.props.sectionName
                  ? `We encountered an error loading the ${this.props.sectionName} section.`
                  : 'We encountered an unexpected error.'}
              </p>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-6 text-left bg-red-50 border border-red-200 rounded-lg p-4">
                  <summary className="cursor-pointer font-semibold text-red-900 mb-2">
                    Error Details (Development Only)
                  </summary>
                  <pre className="text-xs text-red-800 overflow-auto whitespace-pre-wrap break-words">
                    {this.state.error.toString()}
                  </pre>
                </details>
              )}

              <button
                onClick={() => window.location.reload()}
                className="mt-6 px-6 py-3 bg-primary-700 text-white rounded-lg font-semibold hover:bg-primary-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Reload Page
              </button>
            </div>
          </div>
        </motion.section>
      );
    }

    return this.props.children;
  }
}
