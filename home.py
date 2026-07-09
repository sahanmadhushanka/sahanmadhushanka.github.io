import flet as ft

def main(page: ft.Page):
    # 1. පිටුවේ මූලික සැකසුම් (Page Settings)
    page.title = "Developios | Digital Agency Portfolio"
    page.bgcolor = "#FCFBFA" # Soft Off-White පාට
    page.padding = 20
    page.scroll = "auto"
    
    # 2. NAVBAR (උඩින්ම තියෙන මෙනු බාර් එක)
    navbar = ft.Container(
        content=ft.Row(
            controls=[
                ft.Text("Developios", size=24, weight=ft.FontWeight.BOLD, color="#111111"),
                ft.Row(
                    controls=[
                        ft.TextButton("Home", style=ft.ButtonStyle(color="#111111")),
                        ft.TextButton("About", style=ft.ButtonStyle(color="#555555")),
                        ft.TextButton("Projects", style=ft.ButtonStyle(color="#555555")),
                    ],
                    alignment=ft.MainAxisAlignment.CENTER,
                    expand=True
                ),
                ft.Container(
                    content=ft.Text("Get in Touch", color="white", weight=ft.FontWeight.W_600),
                    bgcolor="#111111",
                    padding=ft.padding.symmetric(horizontal=20, vertical=10),
                    border_radius=20,
                )
            ],
            alignment=ft.MainAxisAlignment.SPACE_BETWEEN
        ),
        padding=10
    )

    # 3. HERO SECTION (මැද කොටස)
    hero_section = ft.Container(
        content=ft.Row(
            controls=[
                # වම් පැත්තේ තියෙන Text ටික
                ft.Column(
                    controls=[
                        ft.Row([
                            ft.Text("5.0", weight=ft.FontWeight.BOLD, size=16),
                            ft.Icon(ft.icons.STAR, color="#83b655", size=16),
                            ft.Icon(ft.icons.STAR, color="#83b655", size=16),
                            ft.Icon(ft.icons.STAR, color="#83b655", size=16),
                        ], spacing=2),
                        
                        ft.Text(
                            "UX-First Design\nAgency for Tech",
                            size=40,
                            weight=ft.FontWeight.BOLD,
                            color="#111111"
                        ),
                        
                        ft.Text(
                            "We help startups to design MVPs and build smart software systems.",
                            size=16, color="#555555"
                        ),
                        
                        ft.Container(height=10),
                        
                        # සරල කළු Button එකක්
                        ft.Container(
                            content=ft.Text("Start a Project 🚀", color="white", weight=ft.FontWeight.BOLD),
                            bgcolor="#111111",
                            padding=ft.padding.symmetric(horizontal=30, vertical=15),
                            border_radius=30,
                        )
                    ],
                    expand=1,
                    alignment=ft.MainAxisAlignment.CENTER
                ),
                
                # දකුණු පැත්තේ පින්තූරය වෙනුවට පරණ Version වල හිර නොවෙන්න ලස්සන Colored Box එකක්
                ft.Container(
                    content=ft.Icon(ft.icons.CODE_ROUNDED, size=80, color="#83b655"),
                    bgcolor="#EAEAEA",
                    border_radius=20,
                    alignment=ft.alignment.center,
                    expand=1,
                    height=300
                )
            ],
        ),
        padding=20
    )

    # 4. TECH STACK SECTION (සරල Containers වලින් ලෝගෝ වෙනුවට Text Badges දමා ඇත)
    logos_section = ft.Container(
        content=ft.Column(
            controls=[
                ft.Text("MY DIGITAL TOOLS & FRAMEWORKS", size=12, color="#888888", weight=ft.FontWeight.BOLD),
                ft.Container(height=10),
                ft.Row(
                    controls=[
                        ft.Container(content=ft.Text("Python", color="white"), bgcolor="#3776AB", padding=10, border_radius=5),
                        ft.Container(content=ft.Text("Flet", color="white"), bgcolor="#0052CC", padding=10, border_radius=5),
                        ft.Container(content=ft.Text("SQLite", color="white"), bgcolor="#003B57", padding=10, border_radius=5),
                        ft.Container(content=ft.Text("Arduino", color="white"), bgcolor="#00979D", padding=10, border_radius=5),
                    ],
                    alignment=ft.MainAxisAlignment.SPACE_EVENLY,
                )
            ],
            horizontal_alignment=ft.CrossAxisAlignment.CENTER
        ),
        padding=20
    )

    # පිටුවට සියල්ල එකතු කිරීම
    page.add(navbar, hero_section, logos_section)

# බ්‍රවුසර් එකේ ප්‍රශ්නයක් නම් කෙලින්ම Desktop Window එකෙන්ම ඕපන් වෙන්න හැදුවා
ft.app(target=main)
ft.app(target=main, view=ft.WEB_BROWSER)