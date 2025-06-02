# Sign up response - even user have account

```js
{
    "user": {
        "id": "4fd1476f-ed55-4372-b94c-6fc2c65b18b3",
        "aud": "authenticated",
        "role": "",
        "email": "mdkawsarislam2002@gmail.com",
        "phone": "",
        "confirmation_sent_at": "2025-05-29T16:07:08.856877387Z",
        "app_metadata": {
            "provider": "email",
            "providers": [
                "email"
            ]
        },
        "user_metadata": {},
        "identities": [],
        "created_at": "2025-05-29T16:07:08.856877387Z",
        "updated_at": "2025-05-29T16:07:08.856877387Z",
        "is_anonymous": false
    },
    "session": null
}
```

# Sign up response - fresh user

```js
{
    "user": {
        "id": "e9a809dd-2a62-41d9-ae75-8aa1978e848d",
        "aud": "authenticated",
        "role": "authenticated",
        "email": "mdkawsarislam2002@gmail.com",
        "phone": "",
        "confirmation_sent_at": "2025-05-29T16:09:31.361642458Z",
        "app_metadata": {
            "provider": "email",
            "providers": [
                "email"
            ]
        },
        "user_metadata": {
            "email": "mdkawsarislam2002@gmail.com",
            "email_verified": false,
            "phone_verified": false,
            "sub": "e9a809dd-2a62-41d9-ae75-8aa1978e848d"
        },
        "identities": [
            {
                "identity_id": "c4852c40-c135-41de-802d-44988336452a",
                "id": "e9a809dd-2a62-41d9-ae75-8aa1978e848d",
                "user_id": "e9a809dd-2a62-41d9-ae75-8aa1978e848d",
                "identity_data": {
                    "email": "mdkawsarislam2002@gmail.com",
                    "email_verified": false,
                    "phone_verified": false,
                    "sub": "e9a809dd-2a62-41d9-ae75-8aa1978e848d"
                },
                "provider": "email",
                "last_sign_in_at": "2025-05-29T16:09:31.356340137Z",
                "created_at": "2025-05-29T16:09:31.356392Z",
                "updated_at": "2025-05-29T16:09:31.356392Z",
                "email": "mdkawsarislam2002@gmail.com"
            }
        ],
        "created_at": "2025-05-29T16:09:31.338898Z",
        "updated_at": "2025-05-29T16:09:33.33631Z",
        "is_anonymous": false
    },
    "session": null
}


```
