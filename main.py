import flet as ft

def main(page: ft.Page):
    page.title = "My Portfolio"
    page.theme_mode = ft.ThemeMode.LIGHT
    page.scroll = ft.ScrollMode.AUTO
    
    # Header
    header = ft.Container(
        content=ft.Column([
            ft.Text("My Portfolio", size=40, weight=ft.FontWeight.BOLD, color=ft.Colors.BLUE_700),
            ft.Text("Welcome to my Flet web app", size=20, color=ft.Colors.GREY_700),
        ]),
        alignment=ft.alignment.center,
        padding=50,
        bgcolor=ft.Colors.BLUE_50,
        border_radius=10,
    )
    
    # About section
    about = ft.Container(
        content=ft.Column([
            ft.Text("About Me", size=28, weight=ft.FontWeight.BOLD),
            ft.Text("I'm a developer learning Flet to build web applications. This is my portfolio website built with Python and Flet.", size=16),
        ]),
        padding=30,
    )
    
    # Skills section
    skills = ft.Container(
        content=ft.Column([
            ft.Text("Skills", size=28, weight=ft.FontWeight.BOLD),
            ft.Row([
                ft.Chip(label=ft.Text("Python"), bgcolor=ft.Colors.BLUE_100),
                ft.Chip(label=ft.Text("Flet"), bgcolor=ft.Colors.GREEN_100),
                ft.Chip(label=ft.Text("HTML"), bgcolor=ft.Colors.ORANGE_100),
                ft.Chip(label=ft.Text("CSS"), bgcolor=ft.Colors.PURPLE_100),
            ], wrap=True),
        ]),
        padding=30,
    )
    
    # Contact section
    contact = ft.Container(
        content=ft.Column([
            ft.Text("Contact Me", size=28, weight=ft.FontWeight.BOLD),
            ft.ElevatedButton("GitHub", on_click=lambda e: page.launch_url("https://github.com/sahanmadhushanka")),
            ft.ElevatedButton("LinkedIn", on_click=lambda e: page.launch_url("https://linkedin.com")),
        ]),
        padding=30,
    )
    
    # Add all sections
    page.add(header, about, skills, contact)

ft.app(target=main)