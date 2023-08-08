import React from 'react'
import { useTranslation } from 'react-i18next';

interface userProp {
	name: string,
	email: string
}

const Table: React.FC<userProp[]> = (rowData: userProp[]) => {
	const { t } = useTranslation();

	return (
		<div className="w-1/2 mt-5">

			<div className="overflow-x-auto">
				<table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
					<thead className="ltr:text-left rtl:text-right">
						<tr>
							<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
								{t('LblName')}
							</th>
							<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
								{t('LblEmailAddress')}
							</th>
						</tr>
					</thead>

					{rowData && (
						Object.values(rowData).map(user => (
							<tbody key={user.email} className="divide-y divide-gray-200">
								<tr className="odd:bg-gray-50">
									<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
										{user.name}
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										{user.email}
									</td>
								</tr>

							</tbody>
						))
					)}
				</table>
			</div>
		</div>
	)
}

export default Table
