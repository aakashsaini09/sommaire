import { toast } from 'sonner'

const variants = {
    success: 'bg-green-600 text-white border border-green-700',
    error: 'bg-red-600 text-white border border-red-700',
    warning: 'bg-yellow-500 text-black border border-yellow-600',
    info: 'bg-blue-600 text-white border border-blue-700',
}

type ToastVariant = keyof typeof variants

export function showToast(
    title: string,
    description?: string,
    variant: ToastVariant = 'info'
) {
    toast(title, {
        description,
        className: variants[variant],
        duration: 4000,
    })
}
