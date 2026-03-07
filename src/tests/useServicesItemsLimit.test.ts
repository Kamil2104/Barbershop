import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';

import useServicesItemsLimit from '../hooks/useServicesItemsLimit';

describe('useServicesItemsLimit', () => {
  beforeEach(() => {
    window.innerWidth = 1200;
  });

  it('should return limit of 3 for desktop (width > 1024)', () => {
    const { result } = renderHook(() => useServicesItemsLimit({ section: 'services' }));

    expect(result.current).toBe(3);
  });

  it('should return limit of 4 for tablets (768 <= width < 1024)', () => {
    const { result } = renderHook(() => useServicesItemsLimit({ section: 'services' }));

    act(() => {
      window.innerWidth = 800;
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toBe(4);
  });
});