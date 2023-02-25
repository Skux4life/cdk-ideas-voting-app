export default {
    type: 'object',
    properties: {
        user: { type: 'string' },
        title: { type: 'string' },
        description: { type: 'string' },
    },
    required: ['user', 'title', 'description'],
} as const;
