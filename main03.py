import flet as ft

def main(page: ft.Page):
    page.title = "Developios | Digital Agency Portfolio"
    page.bgcolor = "#001930"
    page.padding = 20
    page.scroll = ft.ScrollMode.AUTO

    # 0.26.0 Gradient Hover Button Style
    nav_button_style = ft.ButtonStyle(
        color={
            ft.ControlState.HOVERED: "#000000",
            ft.ControlState.DEFAULT: "#FFFFFF",
        },
        bgcolor={
            ft.ControlState.DEFAULT: ft.colors.TRANSPARENT,
        },
        gradient={
            ft.ControlState.HOVERED: ft.LinearGradient(
                begin=ft.alignment.top_left,
                end=ft.alignment.bottom_right,
                colors=["#ffc104", "#ff9800"]
            ),
            ft.ControlState.DEFAULT: None
        },
        shape=ft.RoundedRectangleBorder(radius=8),
        animation_duration=200
    )

    navbar = ft.Container(
        content=ft.Row(
            controls=[
                ft.Text("Developios", size=24, weight=ft.FontWeight.BOLD, color="#FFFFFF"),
                ft.Row(
                    controls=[
                        ft.TextButton("HOME", style=nav_button_style),
                        ft.TextButton("ABOUT ME", style=nav_button_style),
                        ft.TextButton("SERVICES", style=nav_button_style),
                        ft.TextButton("RESEARCHES", style=nav_button_style),
                        ft.TextButton("QUALIFICATIONS", style=nav_button_style),
                        ft.TextButton("CONTACT", style=nav_button_style),
                    ],
                    alignment=ft.MainAxisAlignment.CENTER,
                    expand=True
                ),
                ft.Container(
                    content=ft.Text("Get in Touch", color="white", weight=ft.FontWeight.W_600),
                    bgcolor="#111111",
                    padding=ft.Padding(20, 10, 20, 10),
                    border_radius=20,
                )
            ],
            alignment=ft.MainAxisAlignment.SPACE_BETWEEN
        ),
        padding=10
    )

    page.add(navbar)

ft.run_app(target=main)