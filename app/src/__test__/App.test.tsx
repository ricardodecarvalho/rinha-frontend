import { expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import App from '../App'

it('It should contain the main content.', () => {
    render(<App />)
    expect(screen.getByText(/JSON Tree Viewer/i)).toBeInTheDocument()
    expect(screen.getByText(
        /Simple JSON Viewer that runs completely on-client. No data exchange./i
    )).toBeInTheDocument()
    expect(screen.getByText(/Load JSON/i)).toBeInTheDocument()
})
