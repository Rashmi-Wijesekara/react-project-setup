import React from 'react'
import { PropsWithChildren } from 'react'

type fromProps = {
	children: React.ReactNode
}

export const PageContainer = (props: PropsWithChildren<fromProps>) => {
	return (
		<div className="w-[calc(100vw-200px)] max-w-[calc(100vw-200px)] overflow-x-hidden absolute top-[65px] left-[200px] p-3 min-h-[100vh-65px]">
			{props.children}
		</div>
	)
}
