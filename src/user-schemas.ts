/**
 * @id UserQueryDto
 */
export type UserQueryDto = {
    name?: string,
    mail?: string,
}

/**
 * @id UserDto
 */
export type UserDto = {
    /**
     * Name of the user
     * @pattern [A-Z][a-z][0-9]_
     */
    name: string,
    /**
     * @format email
     */
    mail?: string,
}

/**
 * @id UserCollectionDto
 * @items.id UserDto
 */
export type UserCollectionDto = UserDto[];