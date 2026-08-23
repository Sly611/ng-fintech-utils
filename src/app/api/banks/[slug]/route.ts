import { NextResponse } from 'next/server';
import banksData from '@/data/banks.json';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function GET(request:Request, {params}:Props) {

    try{
        const {slug} = await params
        const bank = banksData.find((b) => b.slug === slug.toLowerCase() || b.code === slug);
        
        if (!bank){
          return NextResponse.json({
          success: false,
          error: `Bank with identifier '${slug}' not found`,
            }, {status: 404})
        }

        return NextResponse.json({
            success: true,
            data: bank
        }, {status: 200})

    }catch (error){
        return NextResponse.json(
      {
        success: false,
        error: 'Internal Server Error',
      },{ status: 500 });
    }
    
};
