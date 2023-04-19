import { LIST_ISSUES } from "../constants/api"
import Request from "../utils/request"

export const listIssues = () => Request.get(
	LIST_ISSUES
)

export const listUserRepos = (userName: string, options: {
	page?: number,
	per_page?: number,
	sort?: 'created' | 'updated' | 'pushed'
}) => {
	const { page = 1, per_page = 10000, sort = 'updated' } = options
	return Request.get(
		`https://api.github.com/users/${userName}/repos?page=${page}&per_page=${per_page}&sort=${sort}`
	)
}
