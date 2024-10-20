import React from 'react'
import { createRouter } from '@tanstack/react-router'
// Import the generated route tree
import { routeTree } from './routeTree.gen'
import type { RouteIds } from '@tanstack/react-router'

// Set up a Router instance
export const router = createRouter({
  routeTree,
  defaultPendingComponent: () => (
    <div>Loading form global pending component...</div>
  ),
})

export type RouterType = typeof router
export type RouterIds = RouteIds<RouterType['routeTree']>