export interface PostInterface {
    active: boolean
    id: number
    image_url: string
    name: string
}

export interface AdminPostInterface {
    email: string
    first_name: string
    groups: string[]
    last_name: string
}
